import "./PurchaseHistory.css";

interface IProps {
    purchases: [{
        id: number,
        activity_scheduled_datetime: string,
        event_details: [{
            name: string
        }]
    }],
    userPrimaryColor: string | undefined
}

const PurchaseHistory = ({purchases, userPrimaryColor}: IProps) => {
    return(
        <div className="PurchaseHistory">
            <h3 className="title">Purchase History</h3>
            <table>
                <thead style={{backgroundColor: userPrimaryColor}}>
                    <tr>
                        <th>Activity Name</th>
                        <th>Activity date</th>
                        <th>Operator</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => {
                        return(
                            <tr key={purchase.id}>
                                <td>{purchase.event_details[0].name}</td>
                                <td>{new Date(purchase.activity_scheduled_datetime).toLocaleDateString("en")}</td>
                                <td>Operator Name</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseHistory;