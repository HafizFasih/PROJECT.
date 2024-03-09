/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
const current_usernames: string [] = [ "Ahmed", "Salman","Ali","Moavia","Shaheer"]
const new_users: string [] = [ "Muhammad", "Abrar", "Ali", "Imran", "Ahmed"]

function checkUserNames(current_usernames:string[], new_users:string[]): void
{
    const lowercaseCurrentUsers = current_usernames.map(user => user.toLowerCase())
    for(const users of new_users){
        const lowercaseNewUsers: any = users.toLowerCase();
    if(lowercaseCurrentUsers.includes(lowercaseNewUsers))
    {
      console.log(`Username: ${users} is already taken. Please enter a new username.`)
    }
    else{
        console.log(`Usernam: ${users} is available.`)
    }
}  
}
checkUserNames(current_usernames,new_users)