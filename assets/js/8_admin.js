function withdraw() {
    Swal.fire({
        text: '출금 신청을 진행하시겠습니까?',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '출금 완료',
            '출금 신청이 완료되었습니다.',
            'success'
          )
        }
      })
};//withdraw


function signupok() {
    Swal.fire({
        text: '가입 신청을 승인하시겠습니까?',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '가입 완료',
            '가입이 완료되었습니다.',
            'success'
          )
        }
      })
};//signupok


function signupcancle() {
    Swal.fire({
        text: '가입 신청을 거절하시겠습니까?',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '가입 거절',
            '가입이 거절되었습니다.',
            'success'
          )
        }
      })
};//signupcancle


// 8-5 faq 삭제 버튼
function deletebt() {
  Swal.fire({
    title: '게시글을 삭제하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: '취소',
    confirmButtonText: '확인'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '',
        '게시글이 삭제되었습니다.',
        'success'
      )
    }
  })
}






// 체크박스,,, 모르겠다

$('#checkAll').click(function () {
    $(':chechbox.checkbox').prop('checked', this.checked);
})

// // dropinfo()
// function dropinfo1() {
//     document.getElementById("myDropdown1").classList.toggle("show");
// }

// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var d = 0; d < dropdowns.length; d++) {
//       var openDropdown = dropdowns[d];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// } 
