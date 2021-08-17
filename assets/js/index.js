document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?s=365&apikey=d07f288"
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};
