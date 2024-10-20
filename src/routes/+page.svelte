<div class="content">
    <h1>Hello Blog</h1>

    <h2>hello</h2>
    <h3>hello</h3>
    <h4>hello</h4>
    <h5>hello</h5>
    <h6>hello</h6>
    <p>hello</p>
    <p class="primary">Hello test page</p>
    <p class="brand">Hello test page</p>
    <p class="accent">Hello test page</p>
    <form action="">
        <input type="text" />

        <button type="submit">submit</button>
        <input type="reset" />
        <button disabled>Disabled</button>
        <button class="secondary" disabled>Disabled</button>
        <button class="contrast" disabled>Disabled</button>
        <div role="group">
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
        </div>
        <textarea
            name="valid"
            aria-invalid="false"
            aria-describedby="valid-helper"
        >
            Valid
        </textarea>
        <small id="valid-helper">Looks good!</small>

        <textarea
            name="invalid"
            aria-invalid="true"
            aria-describedby="invalid-helper"
        >
            Invalid
        </textarea>
        <small id="invalid-helper"> Please provide a valid value! </small>
        <label for="test_checkbox">
            <input id="test_checkbox" type="checkbox" name="french" checked />
            test
        </label>
    </form>

    <details open>
        <summary>Accordion 1</summary>
        <p>...</p>
    </details>

    <hr />

    <details>
        <summary>Accordion 2</summary>
        <ul>
            <li>...</li>
            <li>...</li>
        </ul>
    </details>

    <article>
        <header>Header</header>
        Body
        <footer>Footer</footer>
    </article>

    <form>
        <fieldset role="group">
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                autocomplete="email"
            />
            <input type="submit" value="Subscribe" />
        </fieldset>
    </form>

    <form>
        <fieldset role="group">
            <input
                name="email"
                type="email"
                placeholder="Email"
                autocomplete="email"
            />
            <input name="password" type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
        </fieldset>
    </form>

    <form role="search">
        <input name="search" type="search" placeholder="Search" />
        <input type="submit" value="Search" />
        <label>
            Brightness
            <input type="range" />
            <fieldset>
                <label>
                    <input name="terms" type="checkbox" role="switch" />
                    I agree to the Terms
                </label>
                <label>
                    <input
                        name="opt-in"
                        type="checkbox"
                        role="switch"
                        checked
                    />
                    Receive news and offers
                </label>
            </fieldset>
        </label>

        <label>
            Contrast
            <input type="range" value="40" />
        </label>

        <fieldset>
            <legend>Language preference:</legend>
            <label>
                <input type="radio" name="language" checked />
                English
            </label>
            <label>
                <input type="radio" name="language" />
                French
            </label>
            <label>
                <input type="radio" name="language" />
                Mandarin
            </label>
            <label>
                <input type="radio" name="language" />
                Thai
            </label>
            <label aria-disabled="true">
                <input type="radio" name="language" disabled />
                Dothraki
            </label>
        </fieldset>

        <select
            name="favorite-cuisine"
            aria-label="Select your favorite cuisine..."
            required
        >
            <option selected disabled value="">
                Select your favorite cuisine...
            </option>
            <option>Italian</option>
            <option>Japanese</option>
            <option>Indian</option>
            <option>Thai</option>
            <option>French</option>
        </select>
    </form>

    <button aria-busy="true" aria-label="Please wait…" />
    <button aria-busy="true" aria-label="Please wait…" class="secondary" />
    <button aria-busy="true" aria-label="Please wait…" class="contrast" />
    <button aria-busy="true" class="outline">Please wait…</button>
    <button aria-busy="true" class="outline secondary">Please wait…</button>
    <button aria-busy="true" class="outline contrast">Please wait…</button>

    <span aria-busy="true">Generating your link...</span>

    <article aria-busy="true"></article>

    <dialog>
        <article>
            <header>
                <button aria-label="Close"></button>
                <p>
                    <strong>🗓️ Thank You for Registering!</strong>
                </p>
            </header>
            <p>
                We're excited to have you join us for our upcoming event. Please
                arrive at the museum on time to check in and get started.
            </p>
            <ul>
                <li>Date: Saturday, April 15</li>
                <li>Time: 10:00am - 12:00pm</li>
            </ul>
        </article>
    </dialog>

    <nav>
        <ul>
            <li><strong>Acme Corp</strong></li>
        </ul>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
        </ul>
    </nav>

    <progress value="90" max="100" />

    <progress />

    <p>Tooltip on a <a href="#" data-tooltip="Tooltip">link</a></p>
    <p>Tooltip on <em data-tooltip="Tooltip">inline element</em></p>
    <p><button data-tooltip="Tooltip">Tooltip on a button</button></p>
</div>

<style lang="scss">
    .content {
        padding: var(--side);
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    form {
        display: grid;
        gap: 1rem;
        width: 100%;
        max-width: 80%;
    }
</style>
