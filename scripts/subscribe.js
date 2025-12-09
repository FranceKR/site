async function subscribe() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    // Basic validation
    if (!email || !email.includes('@')) {
        alert("Please enter a valid email address");
        return;
    }

    try {
        // Replace with your actual serverless endpoint
        const response = await fetch("https://your-serverless-endpoint.workers.dev/api/subscribe", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            alert("Successfully subscribed! Thank you.");
            emailInput.value = "";
        } else {
            const error = await response.text();
            alert("Subscription failed. Please try again.");
            console.error("Subscription error:", error);
        }
    } catch (error) {
        alert("Network error. Please check your connection and try again.");
        console.error("Network error:", error);
    }
}