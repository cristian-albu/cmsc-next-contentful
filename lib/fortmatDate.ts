export  const formatDate = async (element: any) =>{
    const months: any = {
      jan: "Ianuarie",
      feb: "februarie",
      mar: "Martie",
      apr: "Aprilie",
      may: "Mai",
      jun: "Iunie",
      jul: "Iulie",
      aug: "August",
      sep: "Septembrie",
      oct: "Octombrie",
      nov: "Noiembrie",
      dec: "Decembrie",
    };
    const date = new Date(element).toString().split(" ").slice(1, 4);
    const translatedDate = `${months[date[0].toLocaleLowerCase()]} ${date[1]} ${date[2]}`;

    return translatedDate;
  }

  export default formatDate