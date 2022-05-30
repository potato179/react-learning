import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const history = useNavigate();
    const gotoLogin = () => {
        history("/login");
    }
    return (
        <div>
            <h1><Link to='/login'>로그인페이지</Link></h1>
            <h1><Link to='/signup'>회원가입페이지</Link></h1>
            <input type="button" value = "로그인페이지" onclick = {gotoLogin} />
        </div>
    );
}

export default Main;