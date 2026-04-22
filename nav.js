// Navigation bar for SmartRatesLab - loads on all pages
(function() {
    if (document.getElementById('global-nav')) return;
    
    const navHTML = `
        <div id="global-nav" style="background: #0c1f2f; padding: 0.75rem 0; border-bottom: 1px solid #254f6e;">
            <div style="max-width: 1280px; margin: 0 auto; padding: 0 2rem;">
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; align-items: center;">
                    <a href="index.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">🏠 Home</a>
                    <a href="mortgage-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">🏠 Mortgage</a>
                    <a href="car-refinance-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">🚗 Car Refinance</a>
                    <a href="credit-card-points-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">💳 Credit Card Points</a>
                    <a href="investment-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">📈 Investment</a>
                    <a href="budget-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">📊 Budget</a>
                    <a href="inflation-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">📉 Inflation</a>
                    <a href="college-savings-calculator.html" style="color: #bdd4e8; text-decoration: none; font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 20px;">🎓 College Savings</a>
                </div>
            </div>
        </div>
    `;
    
    const header = document.querySelector('.site-header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
})();
