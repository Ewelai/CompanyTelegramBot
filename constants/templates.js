const moment = require('moment')

const TEMPLATE_TTN = ({status, serialNumber, price, release_date, delivery_date}) => `
  Your query is successfull!
  <b>Status:</b> ${status}
  <b>License:</b> ${serialNumber}
  <b>Price:</b> ${price}
  <b>Release Date:</b> ${moment(release_date).format("DD/MM/YYYY")}
  <b>Delivery Date:</b> ${moment(delivery_date).format("DD/MM/YYYY")}
`;

const TEMPLATE_WAREHOUSE = ({areas, company, name, license, freeArea, totalArea, address}) => `
  Your query is successfull!
  <b>Areas:</b> ${areas.length}
  <b>Company:</b> ${company}
  <b>License:</b> ${license}
  <b>Name:</b> ${name}
  <b>Free area:</b> ${freeArea}/${totalArea}
  <b>Address:</b> ${address}
`;

module.exports = {
  TEMPLATE_TTN,
  TEMPLATE_WAREHOUSE
};
