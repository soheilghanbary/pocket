async function sayHello() {
  const res = await fetch('http://localhost:3000/api/hello');
  const result = await res.json();
  return result;
}

export default async () => {
  const hello = await sayHello();
  return (
    <section className="p-8">
      <h1 className="text-center font-extrabold text-2xl text-foreground">
        I'm Ready to Create!
      </h1>
      <p>{JSON.stringify(hello)}</p>
    </section>
  );
};
