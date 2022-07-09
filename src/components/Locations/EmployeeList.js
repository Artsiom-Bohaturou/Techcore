

export default function EmployeeList({ users }) {

    return (
        <div className='LocationCardEmployeeList'>
            {users.map((e, k) => <img className='LocationCardAvatar' src={e.avatar} key={k} alt=' ' />)}
        </div>
    );
}