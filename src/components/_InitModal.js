import {Modal, Form, Button, Row, Col} from 'react-bootstrap';
import {
    changeMField, 
    changeNField, 
    changeXField, 
    setErrors, 
    toggleModal
} from '../redux/actions/modalActions';
import { connect } from 'react-redux';

function InitModal({properties, errors, isModalOpen, ...props}){

    function validateData(){
        const m = Number(properties.m);
        const n = Number(properties.n);
        const x = Number(properties.x);

        let newErrors = {};
        if(!n || n > 1000 || n < 0){
            newErrors.n = "Wrong input"
        }
        if(!m || m > 1000 || m < 0){
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
            props.toggleModal(false);
        }
        
    }
    return (
        <Modal isModalOpen={isModalOpen}>
            <Modal.Header>
                <Modal.Title>
                    Enter data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>M</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    min="1"
                                    value={properties.m}
                                    onChange={(e) => props.changeMField(e.target.value)}
                                    isInvalid={!!errors?.m}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.m }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>N</Form.Label>
                                <Form.Control type="number" 
                                    min="1" 
                                    value={properties.n}
                                    onChange={(e) => props.changeNField(e.target.value)}
                                    isInvalid={!!errors?.n}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.n }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>X</Form.Label>
                                <Form.Control type="number" 
                                    min="1" 
                                    value={properties.x}
                                    onChange={(e) => props.changeXField(e.target.value)}
                                    isInvalid={!!errors?.x}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    { errors?.x }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={submitHandler}>
                    Run 🚀
                </Button>
            </Modal.Footer>
        </Modal>
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
    toggleModal
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InitModal);