import { useState } from "react";
function Promo() {
    const [employees, setEmployees] = useState(['Anu', 'Andrew', 'Surya', 'Ramesh', 'Kiran']);
    const [staff, setStaff] = useState(
        [
            {
                id: 1,
                name: 'kiran',
                qualification: 'engineer',
                exp: '20 years of exp',
                pic: 'https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/3/the-enduring-hope-of-jane-goodall-photograph-by-nadav-kander-for-time.jpg?imgWI=7.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875',
                desc: 'he is a very good eng'
            },
            {
                id: 2,
                name: 'Jitesh',
                qualification: 'Accountant',
                exp: '20 years of exp',
                pic: 'https://render.fineartamerica.com/images/rendered/search/framed-print/images/artworkimages/medium/3/the-enduring-hope-of-jane-goodall-photograph-by-nadav-kander-for-time.jpg?imgWI=7.5&imgHI=10&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875',
                desc: 'he is from bngl,he is a very good Accountant'
            },
            {
                id: 3,
                name: 'Mohana',
                qualification: 'Accountant',
                exp: '20 years of exp',
                pic: 'https://render.fineartamerica.com/images/rendered/search/print/7.5/10/break/images/artworkimages/medium/3/bell-hooks-1984-time.jpg',
                desc: 'he is from bngl,he is a very good Accountant'
            }
        ]
    )
    return (

        <>
            <h1>Employee Promotion application</h1>
            <table>
                <thead>
                    <th>Emp.NO</th>
                    <th>Employee</th>
                    <th>Promote</th>
                </thead>
                <tbody>
                    {
                        employees.map((emp, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>Mr/Mrs..<strong>{emp}</strong></td>
                                <td>
                                    <button className="btn btn-success">
                                        Promote
                                    </button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>
            {staff.map((item) => (


                <div class="card">
                    <img src={item.pic} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"><b>{item.name}</b></h5>
                            <p class="card-text">{item.desc}</p>
                            <p class="card-text">{item.qualification}</p>
                            <a href="#" class="btn btn-primary">READ MORE!</a>
                        </div>
                </div>
            )
            )

            }
        </>

    );
}
export default Promo;