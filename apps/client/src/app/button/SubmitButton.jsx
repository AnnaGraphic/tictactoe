export function SubmitButton({ route, payload, onSuccess, onError, text }) {
  async function handleSubmit({ route, payload, onSuccess, onError }) {
    //console.log("About to submit the form!");
    console.log('payload', payload);
    const host = 'http://localhost:3333';
    try{ 
      const res = await fetch(host + route, {
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
