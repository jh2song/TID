module.exports = {
  HTML: function () {
      return `
        <!DOCTPYE html>
        <html>
    
        <head>
            <meta chatset="UTF=8">
            <meta name="viewport" content="width=device-width" , initial-scale="1">
            <title> 로그인</title>
    
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
    
            <link rel="stylesheet" href="css/bootstrap.css">
            <link rel="stylesheet" href="css/main.css">
            <link rel="stylesheet" href="css/login.css">
            <link rel="stylesheet" href="css/jquery-ui.css">
            <link rel="stylesheet" href="js/bootstrap.js">
        </head>
    
        <body>
            <nav class="navbar navbar-default" style="width:100%">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="nav navbar-toggle collaps" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/"> TID</a>
                    </div>
    
                    <div class = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class = "nav navbar-nav">
                            <li>
                                <a href="/profile">Profile</a></li>
                                <li class = "dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                      aria-hapopyp="true" aria-expanded="false">Hot<span class="caret"></span></a>
                                    <ul class = "dropdown-menu">
                                        <li><a = href="/hot">Hot</a></li>
                                        <li><a = href="/new">New</a></li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/login">Login</a></li>
                        </ul>
                        <form class="navbar-form navbar-right" style="background-color: #ffffff">
                            <form action="" class="search-form">
                                <div class="form-group has-feedback">
                                    <label for="search" class="sr-only">Search</label>
                                    <input type="text" class="form-control" name="search" id="search" placeholder="search">
                                    <span class="glyphicon glyphicon-search form-control-feedback" style="color: #000000"></span>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="content">
                <div style="color: #000000; height: 80%">
                    <form action="index.html" method="post" class="loginForm">
                        <h2>Login</h2>
                        <div class="idForm">
                            <input type="text" class="id" placeholder="ID">
                        </div>
                        <div class="passForm">
                            <input type="password" class="pw" placeholder="PW">
                        </div>
                        <button type="button" class="btn" onclick="button()">
                            LOG IN
                        </button>
                        <script>
                            let button = () => {
                                alert('login Button !')
                            }
                        </script>
                        <div class="bottomText" style="font-size: 15px;font-weight: bold;">
                            <a data-target="#modal" data-toggle="modal">회원가입</a> |
                            <a data-target="#modal2" data-toggle="modal">ID / PW 찾기</a>
                        </div>
                    </form>
                </div>
            </div>
            <div calss="row">
                <div class="modal" id="modal" tabindex="-1">
                    <div class="modal-dialog" style="background-color: #ffffff;  border-radius: 10px;">
                        <div calss="modal-content">
                            <div class="modal-header" style="text-align: center; font-size: 30px">
                                회원 가입
                                <button class="close" data-dismiss="modal">&times;</button>
                                <form role="form" style="text-align: left;font-size: 20px">
                                    <div class="form-group">
                                        <label for="inputName">성명</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="이름을 입력해 주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="InputEmail">이메일 주소</label>
                                        <input type="email" class="form-control" id="InputEmail" placeholder="이메일 주소를 입력해주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword">비밀번호</label>
                                        <input type="password" class="form-control" id="inputPassword" placeholder="비밀번호를 입력해주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPasswordCheck">비밀번호 확인</label>
                                        <input type="password" class="form-control" id="inputPasswordCheck" placeholder="비밀번호 확인을 위해 다시한번 입력 해 주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputMobile">휴대폰 번호</label>
                                        <input type="tel" class="form-control" id="inputMobile" placeholder="휴대폰번호를 입력해 주세요">
                                    </div>
    
    
    
                                    <div style="text-align: center;">
                                        <button type="submit" id="join-submit">
                                            회원가입<i class="fa fa-check spaceLeft"></i>
                                        </button>
                                        <button type="submit">
                                            가입취소<i class="fa fa-times spaceLeft"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div calss="row">
                <div class="modal" id="modal2" tabindex="-1">
                    <div class="modal-dialog" style="background-color: #ffffff;  border-radius: 10px;">
                        <div calss="modal-content">
                            <div class="modal-header" style="text-align: center; font-size: 30px">
                                ID/PW 찾기
                                <button class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body" style="text-align: center;">
                                <form role="form" style="text-align: left;font-size: 20px">
                                    <p style="	text-indent : 3%;">아이디 찾기</p>
                                    <hr style="margin: 0.5em">
                                    <div class="form-group">
                                        <label>성명</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="이름을 입력해 주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="InputEmail">이메일 주소</label>
                                        <input type="email" class="form-control" id="InputEmail" placeholder="이메일 주소를 입력해주세요">
                                    </div>
                                    <div style="text-align: center;">
                                        <button type="submit" id="join-submit">
                                            아이디 찾기<i class="fa fa-check spaceLeft"></i>
                                        </button>
                                    </div>
                                    <hr style="margin: 0.5em">
                                    <p style="	text-indent : 3%;">비밀번호 찾기</p>
                                    <hr style="margin: 0.5em">
                                    <div class="form-group">
                                        <label>아이디</label>
                                        <input type="text" class="form-control" id="inputName" placeholder="아이디를 입력해 주세요">
                                    </div>
                                    <div class="form-group">
                                        <label for="InputEmail">핸드폰 번호</label>
                                        <input type="email" class="form-control" id="#" placeholder="핸드폰 번호를 입력해주세요">
                                    </div>
                                    <div style="text-align: center;">
                                        <button type="submit" id="join-submit">
                                            비밀번호 찾기<i class="fa fa-check spaceLeft"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https:code.jquery.com/jquery-3.1.1.min.js"></script>
                <script src="js/bootstrap.js"></script>
        </body>
    
        </html>
      `;
  },
};