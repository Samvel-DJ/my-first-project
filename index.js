async function foo(){
	const resp = await fetch('https://api.github.com/users')
	const data = await resp.json();
	console.log(data)
}
foo()
console.log(9379);
