import { useState } from "react";
import { SquarePen, X } from "lucide-react";

import Button from "../components/PrimaryBtn"

export default function BankCard() {
    const [isOpen, setIsOpen] = useState(false);

    const [card, setCard] = useState({
        bank: "Monobank | Universal Bank",
        number: "5375 4411 4540 0954",
        name: "Donald Flinch Cortez",
        valid: "06/24",
        cvc: "123",
    });

    const [temp, setTemp] = useState(card);

    const openEdit = () => {
        setTemp(card);
        setIsOpen(true);
    };

    const saveChanges = () => {
        setCard(temp);
        setIsOpen(false);
    };

    return (
        <>
            {/* CARD */}
            <div className="bg-linear-to-br from-slate-900 to-slate-600 text-white rounded-2xl p-6 relative shadow-xl w-full max-w-md">

                {/* TOP */}
                <div className="flex items-center justify-between">
                    <p className="text-xs opacity-70">{card.bank}</p>

                    <button onClick={openEdit}>
                        <SquarePen size={18} />
                    </button>
                </div>

                {/* CHIP (NOW ABOVE NUMBER) */}
                <img src="assets/chip.png" alt="" className="mt-3" />

                {/* CARD NUMBER */}
                <div className="mt-3 text-xl tracking-widest font-medium">
                    {card.number}
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between items-end mt-8">
                    <div className="flex flex-row items-center gap-4 justify-between">
                        <div>
                            <p className="text-[10px] opacity-60">VALID THRU</p>
                            <p className="text-sm">{card.valid}</p>
                        </div>

                        <div>
                            <p className="text-[10px] opacity-60">CVC</p>
                            <p className="text-sm">{card.cvc}</p>
                        </div>
                    </div>
                    

                    <img src="/assets/master.png" className="w-12" alt="Mastercard" />
                </div>

                {/* NAME */}
                <p className="mt-5 text-sm tracking-widest uppercase opacity-90">
                    {card.name}
                </p>
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                    <div className="bg-white w-full max-w-md rounded-xl p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Edit Card</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <X />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <input
                                className="w-full border p-2 rounded border-gray-300"
                                value={temp.bank}
                                onChange={(e) => setTemp({ ...temp, bank: e.target.value })}
                                placeholder="Bank Name"
                            />

                            <input
                                className="w-full border p-2 rounded border-gray-300"
                                value={temp.number}
                                onChange={(e) => setTemp({ ...temp, number: e.target.value })}
                                placeholder="Card Number"
                            />

                            <input
                                className="w-full border p-2 rounded border-gray-300"
                                value={temp.name}
                                onChange={(e) => setTemp({ ...temp, name: e.target.value })}
                                placeholder="Name"
                            />

                            <input
                                className="w-full border p-2 rounded border-gray-300"
                                value={temp.valid}
                                onChange={(e) => setTemp({ ...temp, valid: e.target.value })}
                                placeholder="MM/YY"
                            />
                            <input
                                className="w-full border p-2 rounded border-gray-300"
                                value={temp.cvc}
                                onChange={(e) => setTemp({ ...temp, cvc: e.target.value })}
                                placeholder="CVC"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 rounded-full bg-gray-200"
                            >
                                Cancel
                            </button>

                            <Button onClick={saveChanges} text="Save" />

                           
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}