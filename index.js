var express = require('express'),
    app = express();


app.use(express.static('public'));


app.get('/api/customer/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};

  for(var i=0, len = customers.length; i<len; i++) {
    if(customers[i].id === customerId){
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/api/customer/', function(req, res) {
  res.json(customers);
});

app.get('/api/order', function(req, res){
  var orders = [];
  for(var i=0, len=customers.length; i<len; i++){
    if(customers[i].orders){
      for(var j=0, ordersLen = customers[i].orders.length;j<ordersLen; j++){
        orders.push(customers[i].orders[i]);
      }
    }
  }
  res.json(orders);
});

app.delete('/api/customer/:id', function(req, res){
  var customerId = parseInt(req.params.id);
  var data = {status: true};
  for(var i=0, len=customers.length;i<len;i++) {
    if(customers[i].id === customerId) {
      customers.splice(i,1);
      data = {status: true};
      break;
    }

  }
  res.json(data);
});

app.listen(8080);

console.log('Exress listening on port 8080');

var customers = [
  {
    joined:'2000-12-02', name:'John', city:'Chicago', orderTotal:9.956,
    id: 1,
    orders: [
      {
        id: 1,
        product: 'Shoes',
        total: 9.956
      }
    ]
  },
  {
    joined:'1965-12-02', name:'Zed', city:'Las Vegas', orderTotal:19.99,
    id: 2,
    orders: [
      {
        id:2,
        product: 'Baseball',
        total:9.995
      },
      {
        id: 3,
        product: 'Bat',
        total: 9.995
      }
    ]
  },
  {
    joined:'1944-12-02', name:'Tina', city:'New York', orderTotal:44.99,
    id: 3,
    orders:[]
  },
  {
    joined:'1995-12-02', name:'Dave', city:'Seattle', orderTotal:101.5,
    id: 4,
    orders:[]
  }
];  