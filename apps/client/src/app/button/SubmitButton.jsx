export function SubmitButton({ route, payload, onSuccess, onError, text }) {
  const server_endpoint = process.env.NX_SERVER_ENDPOINT || "http://localhost:3334";

  async function handleSubmit({ route, payload, onSuccess, onError }) {
    //console.log("About to submit the form!");
    console.log('payload', payload);
    try{ 
      const res = await fetch(`${server_endpoint}${route}`, {
        method: 'POST',
        // to send json body in a post, headers is required
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const response = await res.json();
       if (response.success) {
            //"success true"
            onSuccess(response);
          } else {
            console.log('SubmitButton err: ', response);
            //"success false"
            onError();
          }

    } catch (err) {
      onError(err)
    } 
  
  }
  return (
    <button
      onClick={() => handleSubmit({ route, payload, onSuccess, onError })}
    >
      {text}
    </button>
  );
}
