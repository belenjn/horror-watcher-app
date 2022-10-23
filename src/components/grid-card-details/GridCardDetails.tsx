import "./GridCardDetails.css";

export const GridCardDetails = () => {
  return (
    <div className="gridCardDetails__container">
      <h1 className="gridCardDetails__title">Movie's Title</h1>
      <div className="gridCardDetails__container--movie">
        <div style={{borderRadius: 10, backgroundColor: "grey", height: 500, width: 300}}/>
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam obcaecati illo qui perferendis quidem vel mollitia neque, nobis quaerat hic quo sequi architecto magnam doloremque aspernatur dignissimos. Accusamus, deleniti?
        </h4>
      </div>
    </div>
  );
};
