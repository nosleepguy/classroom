import React from "react";
import "./../../css/linkPreview.css";
import Txt from "./../../assets/icons_file/Txt.svg";
import Excel from "./../../assets/icons_file/Excel.svg";
import Pdf from "./../../assets/icons_file/Pdf.svg";
import Powerpoint from "./../../assets/icons_file/Powerpoint.svg";
import Word from "./../../assets/icons_file/Word.svg";
import { Fragment } from "react";
function PreviewLink(props) {
    const { links } = props;
    // console.log(links);

    return (
        <div className="link-in-post">
            {links?.map((link, index) => {
                // console.log(link);
                const prefix = 64;
                const lastdot = link?.link.lastIndexOf(".");
                const stringLength = link?.link.length;
                const format = link?.link.slice(lastdot, stringLength);
                let srcimg = "";
                switch (format.toLowerCase()) {
                    case ".txt": {
                        srcimg = Txt;
                        break;
                    }
                    case ".xls": {
                        srcimg = Excel;
                        break;
                    }
                    case ".xlsx": {
                        srcimg = Excel;
                        break;
                    }
                    case ".pdf": {
                        srcimg = Pdf;
                        break;
                    }
                    case ".pttx": {
                        srcimg = Powerpoint;
                        break;
                    }
                    case ".doc": {
                        srcimg = Word;
                        break;
                    }
                    case ".docx": {
                        srcimg = Word;
                        break;
                    }
                    default:
                        break;
                }
                return (
                    <Fragment key={index}>
                        <a
                            href={link.link}
                            target="_blank"
                            className="wrapper-link"
                        >
                            {/* <div className="wrapper-link"> */}
                            <img className="img-link" src={srcimg} alt="" />
                            <div className="description-link">
                                {link.link.slice(64)}
                            </div>
                            {/* </div> */}
                        </a>
                    </Fragment>
                );
            })}
        </div>
    );
}

export default PreviewLink;
