import "./AllBlocks.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllBlocks = () => {
  const [blocks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="container all-blocks">
      <div className="">
        <div className="card p-2">
          <div className="block-range">
            <p>Block #15664290 to #15664299 (Total of 15,664,300 blocks)</p>
          </div>
          <table>
            <thead>
              <tr>
                <td>Block</td>
                <td>Age</td>
                <td>Txn</td>
                <td>Uncles</td>
                <td>Free Receipient</td>
                <td>Gas Used</td>
                <td>Gas Limit</td>
                <td>Base Fee</td>
                <td>Reward</td>
                <td>Burnt Fees (ETH)</td>
              </tr>
            </thead>
            <tbody>
              {blocks.map((block, index) => (
                <tr key={index}>
                  <td>
                    <Link to="#">15664113</Link>
                  </td>
                  <td>3 secs ago</td>
                  <td>34</td>
                  <td>0</td>
                  <td>
                    {" "}
                    <Link to="#">Fee Recipient: 0x467...263</Link>
                  </td>
                  <td>
                    2,574,506 <span>(8.58%, -83%)</span>
                  </td>
                  <td>30,000,000</td>
                  <td>5.63 Gwei</td>
                  <td>0.00378 Ether</td>
                  <td>
                    0.014501 <span>(-0.73%)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBlocks;