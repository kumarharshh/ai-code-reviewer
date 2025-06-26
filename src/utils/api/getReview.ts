
export default async function getReview(text:string){
    const prompt = "Please review the following text and provide feedback on its content, structure, and clarity. The review should be concise and constructive.";

    const response = await fetch ("https://openrouter.ai/api/v1/chat/completions",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "openai/gpt-4o",
            messages:[
                {
                    role: "system",
                    content: prompt
                },
                {
                    role :"user",
                    content : text
                }
            ],
            max_tokens: 1000,
            // stream: true,
        })
    })
    if (!response.ok) {
        throw new Error("Failed to fetch review for your text");
    }

    const data = await response.json();
    return data.choices[0].message.content
}