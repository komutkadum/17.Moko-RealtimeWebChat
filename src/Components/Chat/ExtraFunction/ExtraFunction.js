import Swal from 'sweetalert2';

//navigate other profile
export const navigateProfile = (username,photo,uid,history) =>{
    Swal.fire({
        text:username,
        imageUrl:photo,
        imageAlt:username,
        confirmButtonText:"View profile <i class='fas fa-user-circle'></i>"
      }).then(result =>{
        if(result.isConfirmed){
          history.push(`/home/profile/${uid}`)
        }
      }) 
}

//navigate the auth profile
export const myProfile = (name,picture,history,signout) =>{
    Swal.fire({
        title:name,
        imageUrl:picture,
        imageAlt:name,
        imageHeight:'150px',
        imageWidth:"150px",
        focusConfirm:false,
        focusDeny:false,
        focusCancel:false,
        showConfirmButton:true,
        reverseButtons:true,
        confirmButtonText:"Log out <i class='fas fa-paper-plane'></i>",
        confirmButtonColor:"#f44336",
        denyButtonColor:"#4a6e8b",
        showDenyButton:true,
        denyButtonText:'View Profile <i class="fas fa-user-circle"></i>',
    }).then(result=>{
        if(result.isConfirmed){
            logOut(signout);
        }
        if(result.isDenied){
           history.push('/home/profile');
        }
    })
}
const logOut = (signout) =>{
    Swal.fire({
        title: 'LOGOUT?',
        text: 'ARE YOU SURE',
        icon: 'warning',
        allowOutsideClick:false,
        showCancelButton: true,
        confirmButtonText: 'Yes, Logout',
        cancelButtonText: 'No, cancel'
      }).then((result) => {
        if (result.value) {
            signout();
        }else if(result.dismiss===Swal.DismissReason.cancel){
            Swal.fire('Cancelled','Uff.. You had us worried','info');
        }
      })
}

export const convertGMTtoDate = (inputDate) => {
  // Parse the date string into a JavaScript Date object
  const date = new Date(inputDate);

  // Define arrays for months and days to format the date
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Extract the day, month, and year from the Date object
  const day = date.getUTCDate(); // Get the day of the month
  const month = months[date.getUTCMonth()]; // Get the month name from the array
  const year = date.getUTCFullYear(); // Get the year

  // Format the output as "day month year" (e.g., "21 Dec 2020")
  return `${day} ${month} ${year}`;
}