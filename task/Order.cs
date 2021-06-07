

using System;

namespace ConsoleApp1
{
    public class Order
    {
        public string City { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long Cost { get; set; }
        public hotel[] hotels { get; set; }
        public AirLine AirLine { get; set; }
    }
}
