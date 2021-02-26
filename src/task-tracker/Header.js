function Header({form, toggleForm}) {
  return (
    <header>
      <h1>Task Tracker</h1>
      <button 
        onClick={toggleForm}
        style={{backgroundColor: form ? 'black' : 'green'}}>
        {form ? 'Hide' : 'Add'}
      </button>
    </header>
  );
}

export default Header