import { Link } from "react-router-dom"
import {Bar, Doughnut, Line, PolarArea} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const Dashboard = () => {
    return (
        <>
            <aside className="flex flex-col items-center pt-24 w-[300px] h-screen border gap-y-16">
                <div className="flex flex-col items-center gap-y-5 justify-center">
                    <img className="w-[100px] h-[100px] rounded-full shadow-lg border" src="" alt="" />
                    <h3>Ade</h3>
                </div>
                <ul className="flex flex-col gap-y-10">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Artikel</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Kategori</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Logout</Link>
                    </li>
                </ul>
            </aside>
            <section className="border w-full">
                <h1>Dashboard</h1>
                <div className="mx-auto max-w-[900px] w-full">
                <Line className="" data={{
                    labels : ['a','b','C','7 Jan','7 Jan','7 Jan','7 Jan'],
                    datasets: [{
                        label : 'Halo',
                        data : [200,300,100,250],
                        backgroundColor : '#2A403D',
                        tension : .3,
                        pointBackgroundColor : '#D05663',
                        pointBorderColor : '#D05663',
                        borderWidth : 5,
                        pointRadius : 7,
                    },]
                }}/>
                </div>
                <div className="my-20 flex justify-evenly gap-x-36 mx-auto  w-full ">
                <div className="w-1/4 ">
                <Doughnut  data={{
                    labels : ['a','b','C','D'],
                    datasets: [{
                        label : 'Halo',
                        data : [200,300,100,250],
                        backgroundColor : ['#1426EF','#000'],
                    },]
                }}/>
                </div>
                <div className="w-1/4">
                <PolarArea className="" data={{
                    labels : ['a'],
                    datasets: [{
                        data : [200,300,100,250],
                        backgroundColor : ['#1426EF','#000'],
                    },]
                }}/>
                </div>

                </div>
            </section>
        </>
    )
}

export default Dashboard