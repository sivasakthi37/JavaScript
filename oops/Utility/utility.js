module.exports = {
    regex(name,fullname, mob) {
        var st1 = "Hello <<name>>,\nWe have your full name as <<full name>> in our system.\nyour contact number is 91-xxxxxxxxxx. \nPlease,let us know in case of any clarification \nThank you BridgeLabz 01/01/2016. ";

        

        var st1 = st1.replace('<<name>>',name);

        st1 = st1.replace('<<full name>>', fullname);

        st1 = st1.replace('xxxxxxxxxx', mob);

        var data = new Date().toLocaleDateString();
        st1 = st1.replace('01/01/2016', data);

        console.log(st1);


    }

}

