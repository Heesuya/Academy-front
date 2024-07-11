$("#btn").on("click",function(){
    const inputValue = $("#input").val();
    /*
    javascript에서 정규표현식 사용하는 방법
    let regExp = /a/;   /사이에 정규표현식을 작성/
    regExp.test(문자열) : 매개변수로 전달한 문자열이 정규표현식에 맞으면 true  틀리면 false 리턴
    */
   let regExp;
   //1. a라는 문자가 포함되어 있으면 
   //regExp = /a/;
   //2. b라는 문자가 포함되어 있으면
   //regExp = /b/;
   //3. a 또는 b가 포함되어 있으면
   //regExp = /[ab]/;
   //4. a로 시작하면
   //regExp = /^a/;
   //5. b로 시작하면
   //regExp = /^b/;
   //6. a 또는 b로 시작하면
   //regExp = /^[ab]/;
   //7. a로 끝나면
   //regExp = /a$/;
   //8. b로 끝나면
   //regExp = /b$/;
    //9. a또는 b로 끝나면
    //regExp = /[ab]$/;
    //10. a로 시작해서 b로 끝나면(단, 중간에 아무문자나 여러개와도 상관없도록)
    //regExp = /^a.*b$/;  //+앞의 문자 0회 이상 반복하면
    //regExp = /^a.+b$/;  //+앞의 문자 1회 이상 반복하면 
    //11. 숫자만 입력하고 싶은 경우(그외 다른문자는 불가능)
    //regExp = /^[0-9]+$/;
    //12. 영어 대/소문자만 입력하고싶은 경우
    //regExp = /^[a-zA-Z]+$/;
    //13. 한글만 입력하고 싶은 경우
    //regExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]$/;
    //14. 이름을 입력받고 싶은 경우(한글 3글자)
    //regExp = /^[가-힣]{3}$/;
    //15. 이름을 입력받고 싶은 경우(한글 2~4글자)
    //regExp = /^[가-힣]{2,4}$/;
    //16. 이름을 입력받고 싶은 경우(한글 2글자 이상)
    regExp = /^[가-힣]{2,}$/;

   const result = regExp.test(inputValue);
   console.log(result);
});

const arr = ["user01","user02","user03"];
//회원가입을 하는경우
//아이디가 중복인지 
//아이디가 영어 대/소문자+숫자로 6~20글자 인지 체크 

//위 두 조건이 모두 만족해야 submit
//둘 중 하나라도 만족하지 않으면 전송안함

$("#submit").on("click",function(event){
    //정규포현식으로 아이디 조건을 만족하는지 검사(영어 대/소문자 숫자로 6~20글자)
    //조건을 만족하면 -> 중복체크
    //조건을 만족하지 않으면 중복체크는 해보지 않아도 중복이 아님(어차피 저장을 안할 예정이므로)
    const idReg = /^[a-zA-Z0-9]{6,20}$/;
    const inputId = $("#id").val();
    if(idReg.test(inputId)){
        //정규표현식 검사 후 true면 정규표현식 만족 -> 중복체크
        const index = arr.indexOf(inputId);
        if(index != -1){
            //배열에 같은 문자열에 존재 -> 중복된 아이디
            $("#checkMsg").text("이미 사용중인 아이디입니다.");
            $("#checkMsg").css("color","red");
            event.preventDefault();//기본이벤트 제거(submit 수행을 멈춤)
        }else{
            //배열에 같은 문자열에 없음 -> 중복이 아닌 아이디
        }
    }else{
        //정규표현식 검사 후 false면 정규표현식 만족x -> 메세지주고 전송안함
        $("#checkMsg").text("아이디는 영어+숫자로 6~20글자 입니다.");
        $("#checkMsg").css("color","red");
        event.preventDefault();//기본이벤트 제거(submit 수행을 멈춤)
    }
});

$("#pw").on("keyup",function(){
    const pwValue = $(this).val();
    const regArr = [
    /^.{8,12}$/,
    /[A-Z]/,
    /[a-z]/,
    /[0-9]/,
    /[!@#$%]/
    ];
    for(let i = 0; i < regArr.length; i++){
        const check = regArr[i].test(pwValue);
        if(check){
            $(".msg>div").eq(i).addClass("ok");
        }else{
            $(".msg>div").eq(i).removeClass("ok");
        }
    }
});