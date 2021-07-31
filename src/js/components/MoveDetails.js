export default{
    MoveDetail,
    setUp
    }

    function MoveDetail(){
        return `
        <div id="moveId"></div>
        <div id="moveName"></div>
        <div id="moveAccuracy"></div>
        <div id="moveType"></div>
        <div id="moveDamageClass"></div>
        <div id="movePower"></div>
        <div id="movePp"></div>
        `;
    }
    
    function setUp(url){
    search(url);
    }

    function search(url){
        fetch(url)
        .then(response => response.json())
        .then(move=>{
        setId(move.id);
        setName(move.name);
        setAccuracy(move.accuracy)
        setType(move.type);
        setDamageClass(move.damage_class);
        setPower(move.power);
        setPP(move.pp);
        })
        .catch(err => console.log(err));
        }
        
        function setId(id){
            const element = document.getElementById("moveId");
            element.innerHTML = "Move Id: " + id;
        }

        function setName(name){
            const element = document.getElementById("moveName");
            element.innerHTML = "Move Name: " + name;
        }

        function setAccuracy(accuracy){
            const element = document.getElementById("moveAccuracy");
            element.innerHTML = "Move Accuracy: " + accuracy + "%";
        }

        
        function setType(type){
            const element = document.getElementById("moveType");
            element.innerHTML = "Move Type: " + type.name;
        }

        function setDamageClass(damage_class){
            const element = document.getElementById("moveDamageClass");
            element.innerHTML = "Damage Class: " + damage_class.name;
        }

        function setPower(power){
            const element = document.getElementById("movePower");
            element.innerHTML = "Power: " + power;
        }

        function setPP(pp){
            const element = document.getElementById("movePp");
            element.innerHTML = "PP: " + pp;
        }