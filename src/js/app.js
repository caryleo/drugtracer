App = {
    web3Provider: null,
    contracts: {},

    init: function() {


        if (typeof web3 !== 'undefined') {
            web3Provider = web3.currentProvider;
        } else {
            // If no injected web3 instance is detected, fall back to Ganache
            web3Provider = new Web3.providers.HttpProvider('http://localhost:4444');
        }
        web3 = new Web3(web3Provider);


        $.getJSON('hello.json', function(data) {
            var AdoptionArtifact = data;
            contracts.hello = TruffleContract(AdoptionArtifact);
            // Set the provider for our contract
            contracts.hello.setProvider(web3Provider);
            // Use our contract to retrieve and mark the adopted pets
           
        });

          
        contracts.hello.deployed().then(function(instance) {
              adoptionInstance = instance;
  
              return adoptionInstance.fa();
        });
        
    }
    
};

$(function() {
        
    var data = App.init();
    console.log(data);
    var test = $('#test')
    test.find('wenzi').text(data);

        
});