import "../styles/nutrition.css";
import CData from "../cards.json";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


function Nutrition() {
  let startcount=0;

  const [endcount, setendCount] = useState(9);

 
  return (
    <div className="Nutrition">
       <Tabs defaultIndex={0} >
        <TabList>
          <Tab>All Flavours</Tab>
          <Tab>Fruit Flavours</Tab>
          <Tab>Perennial Flavours</Tab>
        </TabList>
        <TabPanel>
        <div className="row card-container">
        {CData.slice(startcount, endcount).map((record) => (
          <div className="col-3">
            <img src={record.icon} className="class-img"></img>
            <h5>{record.desc}</h5>
          </div>
        ))}
      </div>
      {endcount < 20 ? (
        <button
          className="Next"
          onClick={() => {
            setendCount(endcount + 9);
          }}
        >
          Load More
        </button>
      ) : null}
        </TabPanel>
        <TabPanel>
        <div className="row card-container">
            {CData.filter((record) => record.type === "allfruit").map(record=>(
              <div className="col-3">
                  <img src={record.icon} className="class-img"></img>
              <h5>{record.desc}</h5>
             </div>
        ))}
         </div>

        </TabPanel>
        <TabPanel>
        <div className="row card-container">
        {CData.filter((record) => record.type === "allperennial" || record.type === "allperennialfruit").map(record=>(
              <div className="col-3">
             <img src={record.icon} className="class-img"></img>
              <h5>{record.desc}</h5>
             </div>
        ))}
        </div>
         
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Nutrition;
