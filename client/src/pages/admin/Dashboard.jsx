import { Link } from "react-router-dom"
import {Bar, Doughnut, Line, PolarArea} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const Dashboard = () => {
    return (
        <>
            
            <section className="ml-[300px] mb-10 overflow-hidden flex-col w-full">
                <div className="p-5 text-slate-50 font-semibold text-2xl font-roboto bg-[#395B64]">
                    <h1>Dashboard</h1>
                </div>
                <div className=" mx-10 max-w-[1000px] w-full">
                <div className="my-10">
                    <h1 className="text-center">Jumlah Pengunjung</h1>
                    <p className="text-center mt-2 text-sm font-light">7 Hari Terakhir</p>
                </div>
                <div className="p-5 border-t-[10px] border-[#395B64] shadow-lg rounded-xl bg-[#E7F6F2]">
                    <Line data={{
                        labels : ['a','b','C','7 Jan','7 Jan','7 Jan','7 Jan'],
                        datasets: [{
                            label : 'Halo',
                            data : [200,300,100,250],
                            backgroundColor : '#2A403D',
                            borderColor : '#2A403D',
                            tension : .3,
                            pointBackgroundColor : '#fff',
                            pointBorderColor : '#D05663',
                            borderWidth : 5,
                            pointStyle : 'circle',
                            pointRadius : 5,
                            hoverBorderWidth : 7
                        },]
                    }}/>
                </div>
                <div className="flex gap-x-4 border-t-[10px] border-[#395B64] rounded-xl justify-center p-5 my-10 shadow-xl bg-slate-50">
                    <div className="w-1/2 mx-auto">
                    <div className="my-10">
                        <h1 className="text-center">Artikel Populer</h1>
                        <p className="text-center mt-2 text-sm font-light">7 Hari Terakhir</p>
                    </div>
                    <div className="p-5 bg-[#E7F6F2] shadow-lg rounded-xl ">
                        <Bar data={
                            {
                                labels : ['a','a','b','c'],
                                datasets : [{
                                    label : 'Halo',
                                    data : [3,200,4000,4000]
                                }]
                            }
                        }
                        />
                    </div>
                    </div>
                    <div className="w-1/3 mx-auto ">
                        <div className="my-10">
                            <h1 className="text-center">Genre Populer</h1>
                            <p className="text-center mt-2 text-sm font-light">7 Hari Terakhir</p>
                        </div>
                        <div className="p-5 shadow-lg bg-[#E7F6F2] rounded-xl">
                            <PolarArea  data={
                                {
                                    labels : ['hehe','a','b'],
                                    datasets : [{
                                        label : 'saya',
                                        data : [100,200,300]
                                    }]
                                }
                            }
                            
                            />
                        </div>
                    </div>
                </div>
                </div>
                
            </section>
        </>
    )
}

export default Dashboard