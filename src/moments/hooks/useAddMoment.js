import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createMoment} from "../../api/api";

export const useAddMoment = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSend = () => {
        createMoment(text)
            .then(response => {
                setText(''); // Clear the text area
                navigate('/moments');
            })
            .catch(error => {
                alert(error)
            });
    };

    return {handleSend, text, setText};
}