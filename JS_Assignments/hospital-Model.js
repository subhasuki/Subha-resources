var hospital =  {

    hospitalinfo:{    

        name:"Santhi",
        address:"2-south st,Tenkasi",
        GST_no:"AAAAA0000A",
        phone_no:78907656

    },
    

            Employeemanagement:{

                id:"Emp15",
                name:"ABC",
                Age:25,
                DOB:10-07-1995,
                Gender:"Female",
                address:"xxx Tenkasi",
                Mobileno:9089786778,
                qualification:"Bsc",
                Deportment:"Nurse",
                Date_of_join:10-08-2020,
                Experience: "Fresher",
                salary:15000,
                Isemployed: "True"
            },

            Doctors:{

                id:"Doc10",
                name:"AAA",
                Age:30,
                DOB:20-10-1990,
                Gender:"Male",
                address:"YYY",
                Mobile_no:9078564534,
                qualification:"MBBS",
                Deportment: "Ortho",
                Date_of_join:10-10-2002,
                Experience:"2 year",
                salary:20000,
                Isemployed: "True",
                special_list:"Child",
                Available_time:"5 p.m"

            },


            Token:{

                Token_no:"SAK10",
                Date:10-10-2021,
                Today_Dr_list:"Sakthi",
                Available_time:"1 pm to 5 pm",
                Fees:200
                
            },

            patients:{

                    out_patient:{

                        Token_no:"AMU2",
                        OP_no:"OP1",
                        name:"QQQ",
                        Age:12,
                        DOB:12-10-1990,
                        Gender:"Female",
                        address:"yyy",
                        Mobile_no:9087653423,
                        Disease:"Fever",
                        Medicine:"acetaminophen"

                    },


                    In_patient:{

                        Token_no:"QQQ1",
                        IP_np:"IP02",
                        name:"DDD",
                        Age:12,
                        DOB:10-10-9090,
                        Gender:"Male",
                        address:"iiiii",
                        Mobile_no:9087653460,
                        Disease:"Vomiting",
                        Room_type:"ICU",
                        Room_no:10,
                        Scan:"no",
                        Medicine:"Ondansetron "

                    }


            },

            Rooms:{

                Date:10-02-2021,
                Total_rooms:20,
                Available_rooms:10,
                room_no:10,
                room_type:"ICU" || "AC" || "Non-AC" || "Ward" || "Sharing" || "Single",
                status:"Available",
                Amount:1500,

            },

            Lab:{

                Date:01-02-2021,
                Lab_id:"lab12",
                Token_no:"QQQ1",
                IP_np:"IP02",
                Doctor_id:"Doc12",
                Test_type:"Blood" || "Urine",
                Report:"Nothing",
                Amount:1250

            },

            Medical:{

                New_stock_report:{

                    Date:10-02-2021,
                    M_code:"10021 – 69990",
                    name:"oooo",
                    type:"pppp",
                    MFG_Date:10-05-2020,
                    Exp_Date:10-10-2020,
                    Quantity:10,
                    Dealer_amount:50

                }, 

                Old_stock_report:{

                    Date:10-10-2021,
                    M_code:"10021 – 99999",
                    name:"hhhh",
                    type:"kkk",
                    MFG_Date:10-02-2020,
                    Exp_Date:10-10-2020,
                    Quantity:20

                }        
            
            },

            Report:{

                Sales_Report:{

                    Date:10-02-2021,
                    M_code:"1001-09090",
                    name:"lll",
                    type:"aaa",
                    Product:"bbb",
                    Quantity:10,
                    Amount:3000

                },

                Purchase_Report:{

                    Date:10-02-2021,
                    Product:"xxx",
                    Quantity:10,
                    Amount:2500,

                        Dealer_details:{

                                Company_name:"www",
                                Address:"eee",
                                Phone_no:7890678990,
                                Salesman_name:"kumar",
                                sm_phone_no:9078906756,
                                Remark:"sasa"                                 
                        },

                        Order_details:{

                            Productname:"ccc",
                            code:"1221 - 909090",
                            type:    "popop",
                            FormDate:09-09-2021,
                            Todate:15-09-2021,
                            Remark:"sasa"                            

                        }


                }


            }




}