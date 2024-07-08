

    function login(){
        event.preventDefault();
        const id = document.querySelector(".loginId");
        const pw = document.querySelector(".loginPw");
        if(id.value === "" || pw.value ===""){
            alert("아이디와 비밀번호를 확인하세요");
            return false;
        }
        alert("로그인 완료");
        return true;

    }

