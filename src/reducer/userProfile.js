import * as Types from '../constant/Types';
import swal from 'sweetalert';

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PROFILE: {
            // console.log(action.response.data.data);
            const userProfile = action.response.data.data;
            state = { ...userProfile };
            return state;
        }
        case Types.UPDATE_PROFILE: {
            console.log(action.response.data);
            if (action.response.data.success) {
                swal({
                    title: 'Nice!',
                    text: `Cập nhật thông tin thành công`,
                    icon: 'success',
                    buttons: {
                        cancel: true,
                    },
                });
                const userProfile = action.response.data.data;
                state = { ...userProfile };
            }

            return state;
        }
        default:
            return state;
    }
};
export default myReducer;
