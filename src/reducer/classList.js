import * as Types from '../constant/Types';
var initialState = [];
import swal from 'sweetalert';

const findIndex = function (arr, id) {
    return arr.findIndex((elem) => elem.id == id);
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LIST_CLASS: {
            // console.log(state);
            const data = action.response.data.data;
            state = data;
            return state;
        }
        case Types.JOIN_CLASS: {
            console.log(action);

            if (!action.response.data.success) {
                swal({
                    title: 'Oops!',
                    text: `Đã xảy ra lỗi! ${action.response.data.message}`,
                    icon: 'error',
                    buttons: {
                        cancel: true,
                    },
                });
            } else {
                const newState = JSON.parse(JSON.stringify(state));
                const data = action.response.data.data.detailClass;
                // const classId = data.id;
                // const newClass = { ...data};
                newState.push(data);
                state = newState;
                // console.log(state);
            }
            return state;
        }
        case Types.LEAVE_CLASS: {
            // console.log(action);
            const id = action.response.idclass;
            const newState = JSON.parse(JSON.stringify(state));
            const index = findIndex(newState, id);
            newState.splice(index, 1);
            state = newState;

            return state;
        }
        case Types.LOGOUT: {
            state = [];
            return state;
        }
        default:
            return state;
    }
};

export default myReducer;
