import React from "react";
import "antd/dist/antd.css";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function UploadFile(props) {
    const { setLink } = props;

    const props2 = {
        name: "files",
        action: "https://citaclassroom.xyz/api/upload",
        onChange(info) {
            if (info.file.status === "done") {
                // console.log(info.fileList);
                setLink(info.fileList);
                message.success(`${info.file.name} đã tải lên thành công`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} tải lên thất bại`);
            }
        },
        progress: {
            strokeColor: {
                "0%": "#108ee9",
                "100%": "#87d068",
            },
            strokeWidth: 3,
            format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
        },
    };
    return (
        <Upload {...props2}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
}

export default UploadFile;
