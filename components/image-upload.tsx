/* eslint-disable */

"use client";

import CustomTooltipProvider from "@/components/custom-tooltip-provider";
import { cn, formatBytes } from "@/lib/utils";
import { CloudUpload, FileIcon, Paperclip, X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Dropzone, {
  type DropzoneProps,
  type FileRejection,
} from "react-dropzone";
// @ts-ignore
import { toast } from "sonner";

type AcceptedFileType = {
  file: File;
  fileProgress: number;
};

type Props = {
  accept?: DropzoneProps["accept"];
  disabled?: boolean;
  maxFiles?: DropzoneProps["maxFiles"];
  maxSize?: DropzoneProps["maxSize"];
  multiple?: boolean;
  onUpload?: (files: File[]) => void;
  value?: File[];
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export default function Uploader({
  accept,
  disabled,
  maxFiles,
  maxSize,
  multiple,
  setFiles,
  files,
  value,
}: Props) {
  maxSize = maxSize ?? Infinity;
  maxFiles = maxFiles ?? 0;

  const [acceptedFiles, setAcceptedFiles] = useState<AcceptedFileType[]>([]);
  // const [files, setFiles] = useState<File[]>([]);
  // const [isUploading, setIsUploading] = useState<boolean>(false);
  // const [progress, setProgress] = useState<number>(0);

  // Simulate Progress function for each file
  const simulateProgress = useCallback((file: AcceptedFileType) => {
    const interval = setInterval(() => {
      setAcceptedFiles((prevFiles) => {
        return prevFiles.map((prevFile) => {
          if (prevFile.file.name === file.file.name) {
            if (prevFile.fileProgress >= 100) {
              clearInterval(interval);
              return prevFile;
            }
            return { ...prevFile, fileProgress: prevFile.fileProgress + 1 };
          }
          return prevFile;
        });
      });
    }, file.file.size / 6000);

    setFiles((prevFiles) => [...prevFiles, file.file]);
    return interval;
  }, []);

  const handleFilesDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      // console.log('ACCEPTED FILES =>', acceptedFiles);
      // console.log('REJECTED FILES =>', rejectedFiles);
      if (rejectedFiles.length > maxFiles) {
        toast.error(`You can only upload up to ${maxFiles} files`);
        return;
      } else if (rejectedFiles.length > 0) {
        rejectedFiles.forEach((file) => {
          toast.error(`File: ${file.file.name} was rejected`);
        });
        return;
      }
      // acceptedFiles.forEach((file) => {
      //     simulateProgress({ file, fileProgress: 0 });
      // });
      //
      // setAcceptedFiles((prevFiles) => [...prevFiles, ...acceptedFiles.map((file) => ({
      //     file,
      //     fileProgress: 0
      // }))]);
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
    [maxFiles],
  );

  const handleRemoveFile = (index: number) => {
    if (!files && !acceptedFiles) return;
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setAcceptedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-5">
      {/* File upload zone */}
      <Dropzone
        noClick
        disabled={disabled ?? false}
        maxFiles={maxFiles}
        maxSize={maxSize}
        multiple={multiple ?? true}
        onDrop={handleFilesDrop}
        // accept={
        //   accept ?? {
        //     "image/*": [],
        //   }
        // }
      >
        {({ getRootProps, getInputProps, isDragActive, open }) => (
          <div
            {...getRootProps({
              "aria-label": "dropzone area",
            })}
            className={cn(
              "ease flex h-52 w-full flex-col items-center justify-center rounded-2xl border border-dashed p-4 transition-colors",
              isDragActive
                ? "border-slate-400 bg-slate-50"
                : "border-slate-300",
            )}
          >
            <div className="flex flex-col items-center gap-5">
              <CloudUpload className="size-7 text-slate-300" />
              <p className="text-center text-sm">
                Drag & drop files here, or{" "}
                <span
                  className="cursor-pointer font-medium hover:underline"
                  onClick={open}
                >
                  click to select files
                </span>
              </p>
              <input
                type="file"
                {...getInputProps()}
              />
            </div>
            <span className="mt-3 text-sm text-slate-400">
              Upload {maxFiles} files (up to {formatBytes(maxSize)} each)
            </span>
          </div>
        )}
      </Dropzone>

      {/* Attached files list */}
      <div className="space-y-4">
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-gray-700">Attached files</h3>
          <Paperclip className="size-4 text-gray-400" />
        </div>
        {files && files.length > 0 && (
          <div className="space-y-5 rounded-xl border p-5 ">
            {files?.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex flex-col gap-y-2"
              >
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex flex-1 items-center gap-x-3">
                    {file.type.startsWith("image") ? (
                      <div className="flex size-11 items-center justify-center overflow-hidden rounded-lg">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          height={50}
                          width={50}
                          className="size-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg border border-slate-300 p-1">
                        <FileIcon className="size-5 text-slate-400" />
                      </div>
                    )}
                    <div className="flex flex-col items-start">
                      <p className="line-clamp-1 text-sm font-medium text-gray-700">
                        {file.name}
                      </p>
                      <span className="text-xs">{formatBytes(file.size)}</span>
                    </div>
                  </div>
                  <CustomTooltipProvider label="Remove file">
                    <div
                      onClick={() => handleRemoveFile(index)}
                      className="ease flex size-6 cursor-pointer flex-col items-center justify-center rounded-md border transition-colors hover:bg-slate-100"
                    >
                      <X className="size-4 text-slate-500" />
                    </div>
                  </CustomTooltipProvider>
                </div>
                {/* <div className="flex items-center gap-x-5">
                                    <Progress value={file.fileProgress} className="w-full h-1.5" />
                                    <span className="text-xs font-semibold text-slate-500">{file.fileProgress}%</span>
                                </div>*/}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
