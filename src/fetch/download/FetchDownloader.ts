import apiClient from "../BuildFetchClient";
import {FetchOption} from "typescript_api_sdk/src/api/option/FetchOption";
import {DataType} from "typescript_api_sdk/src/api/enums/DataType";
import FileSaver from "file-saver";
import {isNullOrUndefined} from "util";

// function downloadFile(filename, blob) {
//     let link = document.createElement("a");
//     link.setAttribute("href", window.URL.createObjectURL(blob));
//     link.setAttribute("download", filename);
//     link.style.display = "none";
//     document.body.appendChild(link);
//     link.click();
//     return Promise.resolve(filename);
// }

function getHeaderFilename(headers) {
    try {
        const rawFilename = headers.get("Content-Disposition").split("filename=")[1];
        return rawFilename.trim().slice(1, -1); // Removes "
    } catch (err) {
        return "";
    }
}


/**
 * 下载文件
 * 注：使用时注意跨越的限制
 * @param {FetchOption} option
 * @param {string} fileName
 * @returns {Promise<any>}
 */
export function downloadFileByFetch(option: FetchOption, fileName?: string) {

    if (isNullOrUndefined(fileName)) {
        const url = option.url;
        fileName = url.substring(url.lastIndexOf("/"), url.length);
    }

    return apiClient.post({
        ...option,
        dataType: DataType.BLOB,
        useFilter: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).then((blobData: Blob) => {
        //保存文件
        FileSaver.saveAs(blobData, fileName);
    });
}
