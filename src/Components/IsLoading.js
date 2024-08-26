import React from 'react';

// export default class IsLoading extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="d-flex justify-content-center my-3" >
//                     <div className="spinner-border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const IsLoading = () => {

    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
}
export default IsLoading;