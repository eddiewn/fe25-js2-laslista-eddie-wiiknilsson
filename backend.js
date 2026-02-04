const URL =
    "https://laslistaduluxe-default-rtdb.europe-west1.firebasedatabase.app/chungus.json";

const uploadBook = async () => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "My first pot",
            price: 1200,
            createdAt: Date.now(),
        }),
    });

    const data = await res.json();
    console.log(data)
};

document.querySelector("#upload-btn").addEventListener("click", uploadBook)
