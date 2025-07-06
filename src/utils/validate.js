export const validate = (email, password) =>{
    const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,15}$/.test(password);

    if(!isEmail) return "Invalid Email!!";
    if(!isPassword) return "Wrong Password!!";

    return null
}