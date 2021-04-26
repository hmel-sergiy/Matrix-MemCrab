import {
    changeMField, 
    changeNField, 
    changeXField, 
    setErrors, 
    toggleModal,
} from '../../redux/actions/modalActions';
import { setupMatrixTable } from '../../redux/actions/tableActions';
import { connect } from 'react-redux';
import './initModal.css';


function InitModal({properties, errors, isModalOpen, ...props}){

    function validateData(){
        const m = Number(properties.m);
        const n = Number(properties.n);
        const x = Number(properties.x);

        let newErrors = {};
        if(!n || n > 60 || n < 0){
            newErrors.n = "Wrong input"
        }
        if(!m || m > 60 || m < 0){
            newErrors.m = "Wrong input"
        }
        if(!x || x > n * m || x < 0 ){
            newErrors.x = "Wrong input"
        }
        return newErrors;
    }

    function submitHandler(){
        const newErrors = validateData();
        if(Object.keys(newErrors).length !== 0){
            props.setErrors(newErrors)
        }
        else{
            const m = Number(properties.m);
            const n = Number(properties.n);
            const x = Number(properties.x);
            props.setupMatrixTable(m,n,x);
            props.toggleModal(false);
        }
        
    }
    return (
        <div className={'modal-wrapper ' + (!isModalOpen ? 'hidden' : '')}>  
            <div className="modal-body">
                <h1 className="modal-title">
                    Enter data
                </h1>
                <div className="input-group">
                    <div className={'input-wrapper ' + (errors.m ? 'error': '')}>
                        <input  
                            type="number" 
                            min="1"
                            value={properties.m}
                            onChange={(e) => props.changeMField(e.target.value)}
                        />
                        <label>M</label>
                    </div>
                    <div className={'input-wrapper ' + (errors.n ? 'error' : '')}>
                        <input 
                            type="number"
                            min="1"
                            value={properties.n}
                            onChange={(e) => props.changeNField(e.target.value)} 
                        />
                        <label>N</label>
                    </div>
                    <div className={'input-wrapper ' + (errors.x ? 'error' : '')}>
                        <input 
                            type="number"
                            min="1"
                            value={properties.x}
                            onChange={(e) => props.changeXField(e.target.value)} 
                        />
                        <label>X</label>
                    </div>
                </div>
                <button className="modal-button" onClick={submitHandler}>Run 🚀</button>
            </div>  
        </div>
    );
}

const mapStateToProps = (state) => ({
        ...state.modal
});

const mapDispatchToProps = {
    changeMField, 
    changeNField, 
    changeXField,
    setErrors,
    toggleModal,
    setupMatrixTable
}

export default connect(mapStateToProps, mapDispatchToProps)(InitModal);