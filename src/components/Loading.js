export default function loading({ val }) {

  return(
    <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>  
    </div>
  );
}
