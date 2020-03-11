let textA = document.getElementById("box")

send_bot("Hello User 😉")

function send_bot(text) {
    console.log(text)
    textA.innerHTML += "<br> nibbi: <p class=\'bot\'> " + text + "</p>"
}

function send() {
    let msg = document.getElementById("msg").value
    textA.innerHTML += "<br> user: <p class=\'user\' >" + msg + "</p>"
    reply_m = reply(msg)
    send_bot(reply_m)
    console.log(msg)
}


function reply(msg) {
    swear = ["mc", "chutiya", "bhosdk"]
    work = ["do", "open", "close"]
    c = ["Hrithik", "Akshay", "Neha", "Farhan"]

    // if (msg.includes(swear)) { return "Fuck You" }
    if (check(swear, msg)) { return "Fuck You" }
    else if (check(c, msg)) { return "Chutiya.😕" }
    else if (check(work, msg)) { return "Madarchod👩‍🎨 Apna Kam Karna" }
    else {
        return "No Idea abou tht.!😒"
    }
}

function check(arr, text) {
    for(var i=0; i< arr.length; i++){
        if (text.includes(arr[i])) {
            return true
        }
    }
    return false
}