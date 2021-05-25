import React, { useState } from 'react';
import { connect } from 'react-redux';
import './../../css/createnoti.css';
import { actUpPostRequest } from './../../action/Action';
import refreshToken from './../../utils/checkToken';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function CreateNoti(props) {
    const { showCreateNoti, onShowCreateNotiEvent, actUpPost, idclass, getPost } = props;

    // console.log(idclass);

    const [post, setPost] = useState('');
    const onHandleForm = (e) => {
        e.preventDefault();
    };

    const onUpPost = () => {
        const postdata = {
            classId: idclass,
            content: post,
            status: 1,
        };
        refreshToken([actUpPost(postdata)]);
        onShowCreateNotiEvent();
        setPost('');
    };
    return (
        <div className="write-noti" style={showCreateNoti ? { display: 'block' } : { display: 'none' }}>
            {/* <p>Tạo thông báo mới cho lớp học của bạn</p> */}
            <form onSubmit={onHandleForm}>
                {/* <textarea cols="30" rows="10" value={post} onChange={(e) => setPost(e.target.value)}></textarea> */}
                <CKEditor
                    editor={ ClassicEditor }
                    data={post}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setPost(data);
                        // console.log(data);
                        
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
                <div className="btn">
                    <button type="button" onClick={onShowCreateNotiEvent}>
                        Hủy
                    </button>
                    <button
                        type="button"
                        onClick={onUpPost}
                        style={post ? { background: '#2C7EEA', color: 'white' } : {}}
                    >
                        Đăng
                    </button>
                </div>
            </form>
            
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actUpPost: (post) => {
            dispatch(actUpPostRequest(post));
        },
    };
};
export default connect(null, mapDispatchToProps)(CreateNoti);
