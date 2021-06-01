import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    actCreateDocumentRequest,
    actGetDocumentRequest,
} from "../../../action/Action";
import "./../../../css/document.css";

import UploadFile from "../UploadFile";
import DocumentDetail from "./DocumentDetail";
import refreshToken from "../../../utils/checkToken";
import None from "../../None/None";

import swal from "sweetalert";
function Document(props) {
    const idclass = props.match.params.id;
    const {
        userProfile,
        detailClass,
        actCreateDocument,
        documentList,
        actGetDocument,
    } = props;
    // console.log(documentList);

    const [documentListState, setDocumentListState] = useState([]);
    const [contentpost, setContentPost] = useState("");
    const [linkDocumentState, setLinkDocumentState] = useState([]);

    //k cho reload form
    const onSubmit = (e) => {
        e.preventDefault();
    };

    // set link vào state
    const linkDocumentUploaded = (arrLink) => {
        const newarrLink = JSON.parse(JSON.stringify(linkDocumentState));

        arrLink?.map((file) => {
            newarrLink.push(file.response.data.url[0]);
            setLinkDocumentState(newarrLink);
        });
    };
    // nhấn đăng document
    const onhandleCreateDocument = () => {
        if (linkDocumentState?.length > 0) {
            const datasend = {
                name: contentpost,
                classId: +idclass,
                documentLinks: linkDocumentState?.map((link) => {
                    return { name: "Document", link };
                }),
            };
            // console.log(datasend);
            refreshToken([actCreateDocument(datasend)]);
            setContentPost("");
            setLinkDocumentState([]);
        } else {
            window.swal = swal;
            swal({
                title: "Oops!",
                text: "Bạn chưa tải tài liệu nào lên",
                icon: "error",
                buttons: {
                    cancel: true,
                },
            });
        }
    };

    useEffect(() => {
        actGetDocument(+idclass);
    }, []);

    useEffect(() => {
        setDocumentListState([...documentList]);
    }, [documentList]);

    return (
        <div className="document">
            <div
                className={
                    userProfile.id === detailClass.ownerId
                        ? "write-noti"
                        : "write-noti hide"
                }
            >
                <p>Tải lên tài liệu cho lớp của bạn</p>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="input-document"
                        value={contentpost}
                        onChange={(e) => setContentPost(e.target.value)}
                    />
                    <UploadFile setLink={linkDocumentUploaded} />
                    <div className="btn">
                        {/* <button type="button" className="btn-form">
                            Hủy
                        </button> */}
                        <button
                            type="submit"
                            className="btn-form"
                            style={
                                contentpost
                                    ? {
                                          background: "#2C7EEA",
                                          color: "white",
                                      }
                                    : {}
                            }
                            // disabled={
                            //     (linkDocumentState?.length == 0 ? true : false)
                            // }
                            onClick={onhandleCreateDocument}
                        >
                            Đăng
                        </button>
                    </div>
                </form>
            </div>
            {documentListState?.length === 0 ? (
                <None />
            ) : (
                documentListState?.map((item) => (
                    <DocumentDetail key={item.id} datadocument={item} />
                ))
            )}
            {/* {documentListState?.map((item) => (
                <DocumentDetail key={item.id} datadocument={item} />
            ))} */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
        detailClass: state.detailClass,
        documentList: state.documentList,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actCreateDocument: (datadocument) => {
            dispatch(actCreateDocumentRequest(datadocument));
        },
        actGetDocument: (idclass) => {
            dispatch(actGetDocumentRequest(idclass));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Document);
