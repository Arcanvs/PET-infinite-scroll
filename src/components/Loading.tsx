import { FC, useEffect, useState } from 'react'

const Loading: FC = () => {
    const [classLoading, setClassLoading] = useState<string>('');
    const [clockLoader] = useState<string[]>(['clock_loader_10', 'clock_loader_20', 'clock_loader_40', 'clock_loader_60', 'clock_loader_80', 'clock_loader_90']);
    const [countLoading, setCountLoading] = useState<number>(1);
    useEffect(() => {
        const interval = setInterval(() => {
            if(clockLoader.length > countLoading) {
               setCountLoading(countLoading + 1);
            }else{
                setCountLoading(1);
            }
            setClassLoading(clockLoader[countLoading - 1]);
        }, 500);
        return () => clearInterval(interval);
    }, [countLoading, classLoading, clockLoader]);
  return (
    <div className='loading'>
        <span className="material-symbols-outlined">{classLoading}</span>
    </div>
  )
}

export default Loading