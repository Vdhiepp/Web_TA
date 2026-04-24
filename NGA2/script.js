function traCuu() {
    const select = document.getElementById("optionSelect").value;
    const table = document.getElementById("mainTable");

    let content = "";

    switch (select) {
        case "1":
            content = `
                <p><b>Anex</b></p>
                <ul>
                    <li>StayPay đến hết 31/12/2026</li><br>
                    <li>RM ( VND r/n) + BB + x night FOC to TA after C/o</li>
                    <li>Xtra to POA</li>
                    <li>Giảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.</li>
                </ul>
            `;
            break;
        case "2":
            content = `
                <p><b>I1BBOD - Alotment</b></p>
                <ul>
                    <li>VietOne --> StayPay đến hết 31/08/2026 | Selfie --> StayPay đến hết 30/09/2026 | Odeon không note giảm 20%</li><br>
                    <li>RM ( VND r/n) + BB + x night FOC to TA b4 C/I</li>
                    <li>Xtra to POA</li>
                    <li>Giảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.</li>
                </ul>
            `;
            break;
        case "3":
            content = `
                <p><b>HBBBFS - HardBlock</b></p>
                <ul>
                    <li>GreenTravel --> HardBlock đến hết 31/08/2026</li><br>
                    <li>RM ( VND r/n) + BB + x night FOC to TA after C/o</li>
                    <li>Xtra to POA</li>
                    <li>Giảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.</li>
                </ul>
            `;
            break;
        case "4":
            content = `
                <p><b>Rustar</b></p>
                <ul>
                    <li>KHÔNG áp dụng StayPay</li><br>
                    <li>RM ( VND r/n) + BB to TA b4 C/I</li>
                    <li>Xtra to POA</li>
                </ul>
            `;
            break;
        default:
            content = "<p style='color:red;'>Vui lòng chọn option!</p>";
    }

    table.innerHTML = "<h3>Kết quả</h3>" + content;

    table.classList.remove("fade-in");
    void table.offsetWidth;
    table.classList.add("fade-in");
}